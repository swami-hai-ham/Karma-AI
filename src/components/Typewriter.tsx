import { useEffect, useState, useCallback } from "react";

interface TypewriterProps {
    text: string;
    speed: number;
    [key: string]: unknown;
}

function Typewriter({ text, speed, ...otherProps }: TypewriterProps) {
    const [currentText, setCurrentText] = useState('');
    const [__timeout, set__Timeout] = useState<ReturnType<typeof setTimeout> | null>(null);

    const type = useCallback(() => {
        if (currentText.length < text.length) {
            const displayText = text.substr(0, currentText.length + 1);
            setCurrentText(displayText);
        }
    }, [currentText, text]);

    const startTyping = useCallback(() => {
        set__Timeout(setTimeout(type, speed));
    }, [speed, type]);

    useEffect(() => {
        startTyping();

        return () => {
            if (__timeout) {
                clearTimeout(__timeout);
            }
        };
    }, [startTyping, __timeout]);

    return (
        <div className="Typewriter" {...otherProps}>
            <span className="Typewriter__text inline-block">{currentText}</span>
            <span className="Typewriter__cursor inline-block text-current animate-blink">|</span>
        </div>
    );
}

export default Typewriter;