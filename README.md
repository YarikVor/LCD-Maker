# LCD-Maker

Example:
const byte symbol[] = { // o
    0b00000,
    0b00000,
    0b01110,
    0b10001,
    0b10001,
    0b10001,
    0b01110
};
  
void setup(){
    // First this
    lcd.createChar(byte(0), symbvol[i]);
    // Then begin
    lcd.begin(16, 2);
    
    //And write "byte" type
    lcd.write(byte(0));
}

void loop(){}
