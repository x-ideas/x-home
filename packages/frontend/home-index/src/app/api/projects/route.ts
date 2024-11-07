// import { type NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { createClient } from "@xxx-utils/supabase/server";

/**
 * 获取project list的接口实现
 */
export async function GET() {
  const res = await createClient().from("projects").select();

  return NextResponse.json(res);
}
