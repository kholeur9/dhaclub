import { Module } from "@nestjs/common";
import { DrizzleProvider, DrizzleAsyncProvider } from "./drizzle.provider";


@Module({
    providers: [...DrizzleProvider],
    exports: [DrizzleAsyncProvider]
})
export class DrizzleModule {}