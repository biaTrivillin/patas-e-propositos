import { NextResponse } from 'next/server';
import { animais } from '../data';

export async function GET() {
  const lista = animais.map(({ id, nome, especie, minibio }) => ({
    id,
    nome,
    especie,
    minibio
  }));

  return NextResponse.json(lista);
}
