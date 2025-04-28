export default {
    name: 'event',
    title: 'Event',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Event Title',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'startDate',
            title: 'Start Date',
            type: 'datetime',
            validation: Rule => Rule.required(),
        },
        {
            name: 'endDate',
            title: 'End Date',
            type: 'datetime',
            validation: Rule => Rule.required(),
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 3,
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Event Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'status',
            title: 'Event Status',
            type: 'string',
            options: {
                list: [
                    { title: 'Upcoming', value: 'upcoming' },
                    { title: 'In Progress', value: 'in-progress' },
                    { title: 'Completed', value: 'completed' },
                    { title: 'Cancelled', value: 'cancelled' },
                ],
            },
            initialValue: 'upcoming',
        },
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'startDate',
            media: 'image',
        },
        prepare(selection) {
            const { title, subtitle, media } = selection
            return {
                title: title,
                subtitle: subtitle ? new Date(subtitle).toLocaleDateString() : '',
                media: media,
            }
        },
    },
}
