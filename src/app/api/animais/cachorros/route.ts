import { NextResponse } from 'next/server';
import { animais } from '../data';

export async function GET() {
  const cachorros = animais.filter(animal => animal.especie === 'cachorro');
  return NextResponse.json(cachorros);
}
