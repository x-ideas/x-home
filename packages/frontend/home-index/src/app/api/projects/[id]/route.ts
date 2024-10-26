import { type NextRequest } from "next/server";
import { NextResponse } from "next/server";

/**
 * 根据id获取project
 */
export async function GET(
  _request: NextRequest,
  props: { params: Promise<{ id: string }> },
) {
  const params = await props.params;
  const id = params.id;
  return NextResponse.json({ message: `Project ${id}` });
}
