import React, { useEffect, useState } from 'react';

type Account = {
    id: number;
    name: string;
};

const Account: React.FC = () => {
    const [accounts, setAccounts] = useState<Account[]>([]);

    useEffect(() => {
        fetch('http://localhost:8000/accounts/')
            .then(response => response.json())
            .then((data: Account[]) => setAccounts(data));
    }, []);

    return (
        <div>
            <h1>Accounts</h1>
            <ul>
                {accounts.map((account: Account) => (
                    <li key={account.id}>{account.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Account;
