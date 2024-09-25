// devChallenge.test.js

// Mock functions to simulate the logic of your application
function getEmail() {
    return 'hello@devchallenge.it';
}

function getJudgesCount(judges) {
    return judges.length;
}

function isApplePartner(partners) {
    return partners.includes('Apple Inc');
}

// Test suite
describe('Dev Challenge Tests', () => {
    
    test('should return the correct contact email', () => {
        const email = getEmail();
        expect(email).toBe('hello@devchallenge.it');
    });

    test('should verify there are less than 6 judges', () => {
        const judges = ['Judge 1', 'Judge 2', 'Judge 3']; // Example mock data
        const count = getJudgesCount(judges);
        expect(count).toBeLessThan(6);
    });

    test('should not include Apple Inc as a partner', () => {
        const partners = ['Google', 'Microsoft', 'Facebook']; // Example mock data
        const result = isApplePartner(partners);
        expect(result).toBe(false);
    });
});
