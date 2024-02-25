import { type NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";
import { formatApiResponse } from "@/utils/api-response";

const prisma = new PrismaClient();

/**
 * 获取project list
 */
export async function GET(_request: NextRequest) {
  const res = await prisma.projects.findMany();
  return NextResponse.json(formatApiResponse(res));
}
