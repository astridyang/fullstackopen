export interface CoursePartBase {
    name: string;
    exerciseCount: number;
}
export interface OneThreeBase extends CoursePartBase {
    description: string;
}
export interface CoursePartOne extends OneThreeBase {
    name: "Fundamentals";
}

export interface CoursePartTwo extends CoursePartBase {
    name: "Using props to pass data";
    groupProjectCount: number;
}

export interface CoursePartThree extends OneThreeBase {
    name: "Deeper type usage";
    exerciseSubmissionLink: string;
}
export interface unionCoursePart extends OneThreeBase {
    name: "Backend development";
    requirements: Array<string>;
    type: string;
}
export type CoursePart = CoursePartOne | CoursePartTwo | CoursePartThree | unionCoursePart;