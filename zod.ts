import { z } from 'zod';

const schema = z.string();

schema.parse("mitsu");
// schema.parse(123); // error

console.log(schema.safeParse("mitsu")); // { success: true, data: "mitsu" }
console.log(schema.safeParse(123)); // { success: false, error: [error object] }


const User = z.object({
  username: z.string(),
});

User.parse({ username: "mitsu" });
type User = z.infer<typeof User>; // { username: string }
const user: User = { username: "mitsu" };
// const illegalUser: User = { username: "mitsu", age: 32 }; // error


const FishEnum = z.enum(["salmon", "tuna"]);
type FishEnum = z.infer<typeof FishEnum>; // "salmon" | "tuna"
const fish: FishEnum = "salmon";
// illegalFish = "shark"; // error
