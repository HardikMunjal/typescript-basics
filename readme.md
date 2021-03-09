# Installation

Step 1: Install Node Js
Step 2: npm install -g typescript
Step 3 tsc --init 
>> it will create tsconfig.json

# In tsconfig.json update compiled file path as per your need
>> "outDir": "compiled", 

Step 4: tsc
>> It will generate all compiled files in directory

tsc st2-tsrectifier.ts --outDir compiled