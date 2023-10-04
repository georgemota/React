describe('Pruebas en <DemoComponent', () => { 
    
    test( 'This test must not fail', () => {
   
    // 1. Inicialización
    const message1 = 'Hola mundo'

    // 2. Estímulo
    const message2 = message1.trim();

    // 3. Observar el comportamiento... esperando
    expect( message1 ).toBe( message2 );

} ) })

