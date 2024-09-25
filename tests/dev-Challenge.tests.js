function ContactEmailVisible() {
    return 'hello@devchallenge.it';
}
function CountJudges(judges) {
    return judges.length;
}
function NoMobilePartners(partners) {
    return partners.includes('Apple Inc');
}
// Test suite
describe('Tests', () => {
    test('should return the correct contact email', () => {
        const email = ContactEmailVisible();
        expect(email).toBe('hello@devchallenge.it');
    });
    test('should verify there are less than 6 judges', () => {
        const judges = ['Judge 1', 'Judge 2', 'Judge 3']; 
        const count = CountJudges(judges);
        expect(count).toBeLessThan(6);
    });
    test('should not include Apple Inc as a partner', () => {
        const partners = ['Google', 'Microsoft', 'Facebook'];
        const result = NoMobilePartners(partners);
        expect(result).toBe(false);
    });
});
