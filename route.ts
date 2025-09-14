import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    node_version: process.version,
    platform: process.platform,
    environment: process.env.NODE_ENV || 'development',
    uptime: process.uptime()
  })
}
