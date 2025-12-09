import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const userAgent = req.headers.get("user-agent")?.toLowerCase() || "";
  const isMobile =
    /android|iphone|ipad|ipod|opera mini|iemobile|mobile/.test(userAgent);

  // Nếu là mobile và truy cập /handsign → redirect hoặc block
  if (isMobile && req.nextUrl.pathname.startsWith("/handsign")) {
    return NextResponse.redirect(new URL("/mobile-blocked", req.url));
    // hoặc:
    // return new NextResponse("Không hỗ trợ trên mobile", { status: 403 });
  }

  return NextResponse.next();
}

// Chỉ áp dụng middleware cho /handsign
export const config = {
  matcher: ["/handsign/:path*"],
};
