import { NextResponse } from 'next/server';

// TODO: replace with real Supabase queries scoped to authenticated company
async function getFlightsThisMonth(): Promise<number> {
  return 7;
}

async function getPanelsScanned(): Promise<number> {
  return 480;
}

async function getOpenCriticals(): Promise<number> {
  return 12;
}

export async function GET() {
  const [flightsThisMonth, panelsScanned, openCriticals] = await Promise.all([
    getFlightsThisMonth(),
    getPanelsScanned(),
    getOpenCriticals(),
  ])

  return NextResponse.json({ flightsThisMonth, panelsScanned, openCriticals });
}