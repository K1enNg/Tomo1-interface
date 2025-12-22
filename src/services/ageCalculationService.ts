import type { ExactAge } from '../types/denver.types';

export function calculateExactAge(dateOfBirth: Date, referenceDate: Date = new Date()): ExactAge {
    let years = referenceDate.getFullYear() - dateOfBirth.getFullYear();
    let months = referenceDate.getMonth() - dateOfBirth.getMonth();
    let days = referenceDate.getDate() - dateOfBirth.getDate();

    // Adjust days if negative
    if (days < 0) {
        months--;
        const prevMonth = new Date(referenceDate.getFullYear(), referenceDate.getMonth(), 0);
        days += prevMonth.getDate();
    }

    // Adjust months if negative
    if (months < 0) {
        years--;
        months += 12;
    }

    // Calculate total days
    const totalDays = Math.floor((referenceDate.getTime() - dateOfBirth.getTime()) / (1000 * 60 * 60 * 24));

    // Calculate total months (more accurate than years * 12 + months for the test)
    const totalMonths = years * 12 + months;

    return {
        years,
        months,
        days,
        totalMonths,
        totalDays,
    };
}

export function createAgeFromMonths(totalMonths: number): ExactAge {
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    const days = 0;

    return {
        years,
        months,
        days,
        totalMonths,
        totalDays: 0, // Not used for derived ages
    };
}

export function formatAge(age: ExactAge): string {
    return `${age.years} năm ${age.months} tháng ${age.days} ngày`;
}

export function formatAgeShort(age: ExactAge): string {
    return `${age.years}y ${age.months}m`;
}