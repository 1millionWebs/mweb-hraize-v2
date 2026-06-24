import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/src/lib/auth";
import { updateVacancy, deleteVacancy } from "@/src/lib/data";

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

function getToken(request: NextRequest): string | null {
  const auth = request.headers.get("authorization");
  if (!auth || !auth.startsWith("Bearer ")) return null;
  return auth.slice(7);
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const token = getToken(request);
  if (!token || !verifyToken(token)) return unauthorized();

  try {
    const { id } = await params;
    const data = await request.json();

    if (!data.title || !data.department || !data.location || !data.type || !data.experience || !data.description) {
      return NextResponse.json({ error: "All required fields must be filled" }, { status: 400 });
    }

    if (!["Full-Time", "Contract", "Internship"].includes(data.type)) {
      return NextResponse.json({ error: "Invalid job type" }, { status: 400 });
    }

    const updated = await updateVacancy(id, {
      title: data.title,
      department: data.department,
      location: data.location,
      type: data.type,
      experience: data.experience,
      salary: data.salary || "",
      description: data.description,
      requirements: Array.isArray(data.requirements) ? data.requirements.filter(Boolean) : [],
    });

    if (!updated) {
      return NextResponse.json({ error: "Vacancy not found" }, { status: 404 });
    }

    return NextResponse.json({ vacancy: updated, message: "Vacancy updated successfully" });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const token = getToken(request);
  if (!token || !verifyToken(token)) return unauthorized();

  try {
    const { id } = await params;
    const deleted = await deleteVacancy(id);

    if (!deleted) {
      return NextResponse.json({ error: "Vacancy not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Vacancy deleted successfully" });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
