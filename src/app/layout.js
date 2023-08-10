import { PostOwner } from "@/components/PostOwner";
import { Inter } from "next/font/google";
import { Comment } from "@/components/Comment";
import { Reply } from "@/components/Reply";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "quiz-02",
  description: "quiz-02",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        <PostOwner
          username="Phumrapee Tapwong "
          studentId="650610799"
          postText="Quiz ง่ายจังเลยฮาฟฟู่ว ขอยาก ๆ กว่านี้ได้ไหม #261207"
          numLike="100 คน"
          userImage="profileImages/profile.jpg"
        />
        <Comment
          userImagePath="profileImages/lisa.jpg"
          username="Lisa"
          commentText="จริงค่า"
          likeNum="999 คน"
          likeImage="like.svg"
        />
        <Reply
          userImagePath="profileImages/puppy.jpg"
          username="หมาน้อย"
          replyText="จริงค้าบบบบบบ"
          likeNum=""
          likeImage=""
        />
        <Reply
          userImagePath="profileImages/popcat.png"
          username="Cat Meme"
          replyText="ลิซ่าาาาาา"
          likeNum="2 คน"
          likeImage="like.svg"
        />
        <Comment
          userImagePath="profileImages/charliebrown.jpg"
          username="Charlie Brown"
          commentText="บ้าไปแล้ว อิตาบ้า"
          likeNum=""
          likeImage=""
        />
      </body>
    </html>
  );
}
