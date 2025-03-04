function getRasDescription(){
    
    return [
        "Broadcom BCM2711, Quad core Cortex-A72 (ARM v8) 64-bit SoC @ 1.5GHz.",
        "8GB SDRA",
        "2.4 GHz and 5.0 GHz IEEE 802.11ac wireless, Bluetooth 5.0, BLE.",
        "Gigabit Ethernet.",
        "2 USB 3.0 ports; 2 USB 2.0 ports."
    ]
}

function getArduinoDescription(){
    
    return [
        "Microcontroller    ATmega328P",
        "Operating Voltage  5V",
        "Digital I/O Pins   14"
    ]
}

function getMicrobitDescription(){
    
    return [
        "Nordic nRF51822, 16 MHz ARM",
        "256 KB Flash",
        "16 KB RAM",
        "Bluetooth",
        "MicroUSB"
    ]
}

export {getRasDescription, getArduinoDescription, getMicrobitDescription};