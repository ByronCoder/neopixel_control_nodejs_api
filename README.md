# Neopixel Control NodeJS API

### This is the NodeJS API for my Neopixel control project. It uses the NodeJS SerialPort library. The NodeJS Expresss server receives HTTP requests. When it receives a specific request the NodeJS API uses the NodeJS SerialPort library to send a specific character to an Arduino via USB Serial. Based on the character the Arudino starts a specific pattern or is turns off the Neopixels.
