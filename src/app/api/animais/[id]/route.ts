import { NextResponse } from 'next/server';
import { animais } from '../data';

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  const { id } = context.params;
  const animal = animais.find(a => a.id === Number(id));
  
  if (!animal) {
    return NextResponse.json({ error: 'Animal não encontrado' }, { status: 404 });
  }

  return NextResponse.json(animal);
}
