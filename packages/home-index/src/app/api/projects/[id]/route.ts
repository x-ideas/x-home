import { type NextRequest } from "next/server";
import { NextResponse } from "next/server";

/**
 * 根据id获取project
 */
export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } },
) {
  const id = params.id;
  return NextResponse.json({ message: `Project ${id}` });
}
