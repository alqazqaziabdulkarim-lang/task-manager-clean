const createActivityDTO = require('../create-activity.dto');

describe('CreateActivityDTO', () => {
    // Step 1: Happy Path - Test that valid input produces expected output
    test('should create a valid activity object when given correct data', () => {
        const input = {
            title: '  Learn Unit Testing  ', // Extra spaces to test trimming
            description: 'It is important',
            completed: false
        };
        // Pass input to createActivityDTO
        const result = createActivityDTO(input);

        expect(result).toEqual({
            title: 'Learn Unit Testing',
            description: 'It is important',
            completed: false,
            seats: 0,
            registeredStudents: [],
            ownerClub: '',
            ownerName: 'نادي عام'
        });
    });

    // Step 2: Error Path - Verify that invalid input throws an error
    test('should throw an error if title is missing', () => {
        // User provided description only
        const input = { description: 'No title provided' };
        expect(() => createActivityDTO(input)).toThrow('اسم النشاط مطلوب ولا يمكن أن يكون فارغاً');
    });


    // Step 3: Edge Case - Test default values (optional fields)
    test('should set default values for optional fields', () => {
        const input = {
            title: 'Simple Activity'
        };

        const result = createActivityDTO(input);

        expect(result).toEqual({
            title: 'Simple Activity',
            description: '', // Default empty string
            completed: false, // Default false
            seats: 0,
            registeredStudents: [],
            ownerClub: '',
            ownerName: 'نادي عام'
        });
    });

    // Step 4: Security - Test for SQL Injection
    test('should throw error if input contains SQL injection patterns', () => {
        const maliciousInputs = [
            'Activity; DROP TABLE Activites',
            'Activity -- comments',
            'Activity OR 1=1'
        ];

        maliciousInputs.forEach(maliciousTitle => {
            const input = { title: maliciousTitle };
            expect(() => createActivityDTO(input)).toThrow('تم اكتشاف رموز غير صالحة');
        });
    });

    // Length validation tests are commented out in implementation, keeping them commented here or removing if unnecessary.
    // Preserving logic from original file where they were commented out.

    // test('should throw an error if title is too short (< 3 chars)', () => {
    //     const input = { title: 'Hi' };
    //     expect(() => createActivityDTO(input)).toThrow('Title must be at least 3 characters');
    // });

    // test('should throw an error if title is too long (> 100 chars)', () => {
    //     const longTitle = 'a'.repeat(101);
    //     const input = { title: longTitle };
    //     expect(() => createActivityDTO(input)).toThrow('Title cannot exceed 100 characters');
    // });
});
