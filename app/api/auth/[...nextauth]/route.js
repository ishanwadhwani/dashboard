import GoogleProvider from "next-auth/providers/google";
import User from "../../../../models/User";
import NextAuth from "next-auth/next";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google") {
        const { email, name } = user;
        try {
          await connectToDB();
          const isUserExists = await User.findOne({ email });

          if (!isUserExists) {
            const res = await fetch("/api/user", {
              method: "POST",
              body: JSON.stringify({ email, name }),
              headers: {
                "Content-Type": "application/json",
              },
            });

            if (res.success) {
              return user;
            }
          }
        } catch (error) {
          console.log(error);
        }
      }
      return user;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
