import { getTokenWithExpiry } from "../auth";

const apiUrl = import.meta.env.VITE_API_BASE_URL;

async function getNoticesNum() {
    const token = getTokenWithExpiry('token');
    if (!token) {
        return null;
    }
    const response = await fetch(`${apiUrl}/auth/getNoticeNum`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });
    const data = await response.json();
    return data;
}

async function getNotices(requireID,pageSize,read) {
    const token = getTokenWithExpiry('token');
    if (!token) {
        return null;
    }
    const params = `requireID=${requireID}&pageSize=${pageSize}&read=${read}`;
    const response = await fetch(`${apiUrl}/auth/getNotice?${params}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });
    const data = await response.json();
    return data;
}

async function readNotice(id) {
    const token = getTokenWithExpiry('token');
    if (!token) {
        return null;
    }
    const response = await fetch(`${apiUrl}/auth/readNotice/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });
    const data = await response.json();
    return data;
}

export { getNoticesNum, getNotices, readNotice };