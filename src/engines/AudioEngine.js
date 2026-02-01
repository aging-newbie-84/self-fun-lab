import ostV1 from '../assets/ost.mp3';
import ostV12 from '../assets/ost_v1.2.mp3';
import ostV13 from '../assets/ost_v1.3.mp3';
import ostV14 from '../assets/ost_v1.4.mp3';

class AudioEngine {
    constructor() {
        this.tracks = {
            'v1.0': ostV1, // Calm / Start
            'v1.2': ostV12, // Rising / Active
            'v1.3': ostV13, // High Energy / Peak
            'v1.4': ostV14  // Climax / Choice
        };
        this.audios = {};
        this.currentTrack = null;
        this.initialized = false;
    }

    async init() {
        if (this.initialized) return;

        // Create audio objects for all tracks
        for (const [key, src] of Object.entries(this.tracks)) {
            const audio = new Audio(src);
            audio.loop = true;
            audio.volume = 0;
            this.audios[key] = audio;
        }

        this.initialized = true;
        console.log("Audio Engine Initialized with 4 tracks");
    }

    startDrone(track = 'v1.0') {
        if (!this.initialized) return;

        const audio = this.audios[track];
        if (!audio) return;

        this.currentTrack = track;
        audio.play().then(() => {
            this.fadeIn(audio, 0.4, 2000);
        }).catch(e => console.warn("Audio play blocked", e));
    }

    switchTrack(newTrack) {
        if (!this.initialized || newTrack === this.currentTrack || !this.audios[newTrack]) return;

        const oldAudio = this.audios[this.currentTrack];
        const newAudio = this.audios[newTrack];

        console.log(`Switching audio: ${this.currentTrack} -> ${newTrack}`);

        // Start new audio at volume 0 and play
        newAudio.currentTime = oldAudio ? oldAudio.currentTime : 0;
        newAudio.play().then(() => {
            if (oldAudio) this.fadeOut(oldAudio, 0, 3000);
            this.fadeIn(newAudio, 0.4, 3000);
            this.currentTrack = newTrack;
        });
    }

    fadeIn(audio, targetVol, duration = 2000) {
        if (!audio) return;
        let step = targetVol / (duration / 100);
        let interval = setInterval(() => {
            if (audio.volume < targetVol) {
                audio.volume = Math.min(targetVol, audio.volume + step);
            } else {
                clearInterval(interval);
            }
        }, 100);
    }

    fadeOut(audio, targetVol, duration = 2000) {
        if (!audio) return;
        let step = audio.volume / (duration / 100);
        if (step <= 0) step = 0.01;
        let interval = setInterval(() => {
            if (audio.volume > targetVol) {
                audio.volume = Math.max(targetVol, audio.volume - step);
            } else {
                audio.pause();
                clearInterval(interval);
            }
        }, 100);
    }

    stop() {
        Object.values(this.audios).forEach(audio => {
            this.fadeOut(audio, 0, 1000);
        });
    }
}

const engine = new AudioEngine();
export default engine;
