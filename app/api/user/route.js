import connectToDB from "../../../database";
import User from "../../../models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectToDB();
    const { email, name } = req.json();

    const newUser = await User.create({ email, name });

    if (newUser) {
      return NextResponse.json({
        success: true,
        message: "You have registered successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something went wrong",
      });
    }
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      success: false,
      message: "Something went wrong",
    });
  }
}
