import { NextResponse } from 'next/server';
import { animais } from '../data';

export async function GET() {
  const gatos = animais.filter(animal => animal.especie === 'gato');
  return NextResponse.json(gatos);
}
