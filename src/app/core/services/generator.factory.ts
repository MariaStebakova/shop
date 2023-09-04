import { InjectionToken } from "@angular/core";

import { GeneratorService } from "./generator.service";

export const GeneratorToken5 = new InjectionToken<string>("GeneratorToken5");

export function GeneratorFactory(n: number){
    return (generator: GeneratorService) => generator.generate(n);
}