import { ActionIcon } from "@mantine/core";
import { IconUsersGroup } from "@tabler/icons-react";

export function IconGroupCircle() {
    return (
        <ActionIcon variant="light" size="lg" color="gray" radius="xl">
            <IconUsersGroup stroke={1.5} />
        </ActionIcon>
    );
}
