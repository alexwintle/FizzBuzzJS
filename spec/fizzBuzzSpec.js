describe('FizzBuzz', function() {
    let fizzBuzz;

    beforeEach(function() {
        fizzBuzz = new FizzBuzz();
    });

    describe('#play', function() {
        it('should display "Fizz" for multiples of 3', function () {
            expect(fizzBuzz.play(6)).toEqual("Fizz");
        });

        it('should display "Buzz" for multiples of 5', function () {
            expect(fizzBuzz.play(10)).toEqual("Buzz");
        });

        it('should display "FizzBuzz" for multiples of 15', function () {
            expect(fizzBuzz.play(30)).toEqual("FizzBuzz");
        });

        it('should return the number if it is NOT divisible by 3 or 5', function() {
            expect(fizzBuzz.play(4)).toEqual(4);
        });
    });

})




