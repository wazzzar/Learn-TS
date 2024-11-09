/* eslint-disable @typescript-eslint/no-namespace */
// BEGIN (write your solution here)
namespace Company {
    export function isEmployeeEmail(email: string, domain: string): boolean {
        return !!email.match(new RegExp(`@${domain}$`, 'i'));
    }
}
// END

type User = {
    email: string
};

function authorize(user: User | null): boolean {
    const companyDomain = 'hexlet.io';

    const email = user?.email ?? '';

    return Company.isEmployeeEmail(email, companyDomain);
}

export default authorize;
