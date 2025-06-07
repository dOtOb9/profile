import UniversityIcon from './icon/university_icon.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function ProfileCard() {
    return (
        <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
            <div className="flex items-center mb-4">
              <Image 
                src="https://github.com/dOtOb9.png"
                alt="Profile Picture"
                width={64}
                height={64}
                className="rounded-full mr-4"
              />
              <div className="flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-2">dOtOb9</h2>
                <p className="text-gray-700">Civil Enginnering Student & Programmer</p>
              </div>
            </div>
            <div className="flex flex-col items-center mt-2">
              <Link href="posts/about" className="ml-2 text-gray-600 hover:underline">details</Link>
            </div>
        </div>
        </div>
    );
}