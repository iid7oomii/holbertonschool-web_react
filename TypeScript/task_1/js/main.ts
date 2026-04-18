interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

const teacher3: Teacher = {
    firstName: 'Abdulrahman',
    fullTimeEmployee: false,
    lastName: 'Alghamdi',
    location: 'Riyadh',
    contract: false,
};

console.log(teacher3);
