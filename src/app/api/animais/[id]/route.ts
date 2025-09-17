import { NextRequest, NextResponse } from 'next/server';
import { animais } from '../data';

export async function GET(
    req: NextRequest,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    context: any 
) {
    const params = await context.params;  
    const id = params?.id;

    const animal = animais.find((a) => a.id === Number(id));

    if (!animal) {
        return NextResponse.json({ error: 'Animal não encontrado' }, { status: 404 });
    }

    return NextResponse.json(animal);
}
