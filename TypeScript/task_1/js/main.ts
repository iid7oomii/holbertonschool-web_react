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


interface Directors extends Teacher  {
  numberOfReports: number;
}

const director1: Directors = {
    firstName: 'Saad',
    lastName: 'Saeed',
    location: 'Albaha',
    fullTimeEmployee: true,
    numberOfReports: 28,
};
console.log(director1);
