/**
 * Blocks to simulate MIDI instruments.
 */
//% weight=85 color="#5ea9ff"
namespace minode {

	/**
     * Get pinname
     */
    //% blockId=get_pin_name
    //% shim=minode::getPin
    export function getPin(connName: ConnName): number{
      return 0;
    }

    /**
     * Get analog pinname
     */
    //% blockId=get_analog_pin_name
    //% shim=minode::getanalogPin
    export function getanalogPin(connName: AnalogConnName): number{
      return 0;
    }

    /**
     * Get Pin Property
     */
    //% blockId=get_pin_property
    //% shim=minode::getPinProperty
    export function getPinProperty(connName: ConnName): number{
      return 0;
    }

    /**
     * Get DHT11 temperature (celsius or fahrenheit).
     */
    //% blockId=minode_dht_get_temperature block="dht11 %connName| tempreature %FanStatus" 
    //% shim=minode::DHTGetTemperature
    export function DHTGetTemperature(connName: ConnName, style: DHTTemStyle): number{
      return 0;
    }

    /**
     * Get DHT11 Humidity.
     */
    //% blockId=minode_dht_get_humidity block="dht11 %connName| humidity"
    //% advanced=true
    //% shim=minode::DHTGetHumidity
    export function DHTGetHumidity(connName: ConnName): number{
      return 0;
    }

    /**
     * Do something when DHT11 temperature change.
     */
    //% blockId=minode_on_dhttemperature_change block="dht11 %connName| on temperature change"
    //% advanced=true
    //% shim=minode::onDHTEvent
    export function onDHTEvent(connName: ConnName, body: () => void): void{
    	return;
    }

}