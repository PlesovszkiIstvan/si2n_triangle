describe('Az app.js tesztjei', () =>{
    it('Bemenet 30,35,akkor 525',()=>{
        let actual = calcTriangleArea(30,35);
        expect(525).toBe(actual);
    })
    it('Bemenet 100,130,akkor 6500',()=>{
        let actual = calcTriangleArea(100,130);
        expect(6500).toBe(actual);
    })
    it('Bemenet 1,3,akkor 1,5',()=>{
        let actual = calcTriangleArea(100,130);
        expect(6500).toBe(actual);
    })
})

describe('Az bevitel ellenőrzésének tesztje', () =>{
    it('Az "a" bemenetre false-t várunk', ()=>{
        let actual = chechInput('33');
        expect(actual).not.toBeNull();
    })
})

/*
it('Első teszt',() => {
    expect(true).toBe(true);
});

xit('Második teszt',() => {
    expect(true).toBe(true);
});

it('Harmadik teszt',() => {
    expect(true).toBe(true);
});
*/ 