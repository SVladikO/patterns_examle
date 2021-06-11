class Client {
}

class RemoteControl {
    constructor(device) {
        this.device = device;
    }

    togglePower() {
        this.device.isEnabled() ? this.device.disable() : this.device.enable();
    }

    volumeDown() {
        this.device.setVolume(this.device.getVolume() - 5)
    }

    volumeUp() {
        this.device.setVolume(this.device.getVolume() + 5)
    }

    channelDown() {
        this.device.setChannel(this.device.getChannel() - 1)
    }

    channelUp() {
        this.device.setChannel(this.device.getChannel() + 1)
    }
}

// Use interface
class Device {
    enabled = false;
    volume = 20;
    channel = 1;

    isEnabled() {
        console.log('checked power')
        return this.enabled;
    }

    enable() {
        console.log('device enabled');
        this.enabled = true;
    }

    disable() {
        console.log('device disabled');
        this.enabled = false;
    }

    getVolume() {
        return this.volume;
    }

    setVolume(volume) {
        if (this.volume <= 0) return;

        this.volume = volume;
    }

    getChannel() {
        return this.channel;
    }

    setChannel(channel) {
        this.channel = channel;
    }

}

class Radio extends Device {
}

class TV extends Device {
}

let tv = new TV();
let remote = new RemoteControl(tv);
remote.togglePower();

