import { NextResponse } from 'next/server';
import { animais } from '../data';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const animal = animais.find(a => a.id === Number(params.id));
  
  if (!animal) {
    return NextResponse.json({ error: 'Animal não encontrado' }, { status: 404 });
  }

  return NextResponse.json(animal);
}
