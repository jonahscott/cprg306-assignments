import Link from 'next/link';

const StudentInfo = () => {
    return (
        <div>
            <p>Name: Jonah Scott</p>
            <p>Course Section: CPRG 306-A</p>
            <Link href="https://github.com/jonahscott/cprg306-assignments">My GitHub Repository</Link>
        </div>
    );
};

export default StudentInfo;