import { type NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { supabase } from "../client";

/**
 * 获取project list的接口实现
 */
export async function GET(_request: NextRequest) {
  const res = await supabase.from("projects").select();

  return NextResponse.json(res);
}
