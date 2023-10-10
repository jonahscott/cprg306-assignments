import Link from 'next/link';
import StudentInfo from './StudentInfo';

export default function Home() {
    return (
        <div>
            <h1 className="text-4xl mb-8">CPRG 306: Web Development 2 - Assignments</h1>
            <StudentInfo />
            <Link href="/week2">Week 2</Link>
            <div>
            <Link href="/week3">Week 3</Link>
            </div>
            <div>
            <Link href="/week4">Week 4</Link>
            </div>
        </div>
    )
}
