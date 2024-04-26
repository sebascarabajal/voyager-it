"use client"
import React from 'react'
import { Timeline , Button} from "flowbite-react";
import { useRouter } from 'next/navigation';

export default function Time() {
    const router = useRouter()
    return (
        <Timeline>
            <Timeline.Item color='black'>
                <Timeline.Point color='black' />
                <Timeline.Content>
                    <Timeline.Time>April 2024</Timeline.Time>
                    <Timeline.Title>Ionixx Technologies</Timeline.Title>
                    <Timeline.Body>
                        Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
                        E-commerce & Marketing pages.
                    </Timeline.Body>
                    <Button onClick={() => router.push("/projects/Ionixx")}>
                        Look the project
                    </Button>
                </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content>
                    <Timeline.Time>???</Timeline.Time>
                    <Timeline.Title>Coming soon...</Timeline.Title>
                    <Timeline.Body>
                        Stay tuned for more updates and new components.
                    </Timeline.Body>
                </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content>
                    <Timeline.Time>???</Timeline.Time>
                    <Timeline.Title>Coming soon...</Timeline.Title>
                    <Timeline.Body>
                        Stay tuned for more updates and new components.
                    </Timeline.Body>
                </Timeline.Content>
            </Timeline.Item>
        </Timeline>
    )
}

