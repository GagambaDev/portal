import { NextResponse } from "next/server";
import { getBuilding } from "@/lib/data/buildings/utils";

type RouteParams = {
    params: Promise<{ id: string }>;
};

export async function GET(_request: Request, { params }: RouteParams) {
    const { id } = await params;
    const building = getBuilding(id);

    if (!building) {
        return NextResponse.json({ error: "Building not found" }, { status: 404 });
    }

    return NextResponse.json(building);
}
