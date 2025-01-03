import { Dispatch, FC, SetStateAction } from "react";
import { IconCheck, IconPalette } from "@tabler/icons-react";
import {
    ActionIcon,
    Button,
    Popover,
    rem,
    ScrollArea,
    Text,
    Tooltip,
} from "@mantine/core";
import { useEditor } from "@tiptap/react";

export interface BubbleColorMenuItem {
    name: string;
    color: string;
}

interface ColorSelectorProps {
    editor: ReturnType<typeof useEditor>;
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const TEXT_COLORS: BubbleColorMenuItem[] = [
    {
        name: "Default",
        color: "",
    },
    {
        name: "Blue",
        color: "#2563EB",
    },
    {
        name: "Green",
        color: "#008A00",
    },
    {
        name: "Purple",
        color: "#9333EA",
    },
    {
        name: "Red",
        color: "#E00000",
    },
    {
        name: "Yellow",
        color: "#EAB308",
    },
    {
        name: "Orange",
        color: "#FFA500",
    },
    {
        name: "Pink",
        color: "#BA4081",
    },
    {
        name: "Gray",
        color: "#A8A29E",
    },
];

export const ColorSelector: FC<ColorSelectorProps> = ({
    editor,
    isOpen,
    setIsOpen,
}) => {
    const activeColorItem = TEXT_COLORS.find(({ color }) =>
        editor?.isActive("textStyle", { color }),
    );

    return (
        <Popover width={200} opened={isOpen} withArrow>
            <Popover.Target>
                <Tooltip label="Text color" withArrow>
                    <ActionIcon
                        variant="default"
                        size="lg"
                        radius="0"
                        style={{
                            border: "none",
                            color: activeColorItem?.color,
                        }}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <IconPalette size={16} stroke={2} />
                    </ActionIcon>
                </Tooltip>
            </Popover.Target>

            <Popover.Dropdown>
                {/* make mah responsive */}
                <ScrollArea.Autosize type="scroll" mah="400">
                    <Text span c="dimmed" inherit>
                        COLOR
                    </Text>

                    <Button.Group orientation="vertical">
                        {TEXT_COLORS.map(({ name, color }, index) => (
                            <Button
                                key={index}
                                variant="default"
                                leftSection={<span style={{ color }}>A</span>}
                                justify="left"
                                fullWidth
                                rightSection={
                                    editor?.isActive("textStyle", { color }) && (
                                        <IconCheck style={{ width: rem(16) }} />
                                    )
                                }
                                onClick={() => {
                                    if (editor) {
                                        editor.commands.unsetColor();
                                        if (name !== "Default") {
                                            editor
                                                .chain()
                                                .focus()
                                                .setColor(color || "")
                                                .run();
                                        }
                                        setIsOpen(false);
                                    }
                                }}
                                style={{ border: "none" }}
                            >
                                {name}
                            </Button>
                        ))}
                    </Button.Group>
                </ScrollArea.Autosize>
            </Popover.Dropdown>
        </Popover>
    );
};
