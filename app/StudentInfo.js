import Link from 'next/link';

const StudentInfo = () => {
    return (
        <div>
            <p>Jonah Scott</p>
            <p>CPRG 306-A</p>
            <Link href="https://github.com/jonahscott/cprg306-assignments" passHref>
            My GitHub Repository
            </Link>
        </div>
    );
};

export default StudentInfo;

