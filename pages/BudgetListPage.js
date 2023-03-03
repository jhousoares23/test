import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function BudgetListPage() {
    const [budgets, setBudgets] = React.useState([]);

    React.useEffect(() => {
        axios.get('/api/budgets').then(response => {
            setBudgets(response.data);
        });
    }, []);

    return (
        <div className="container">
            <h1>Orçamentos</h1>
            <ul>
                {budgets.map(budget => (
                    <li key={budget.id}>
                        <Link to={`/orcamentos/${budget.id}`}>{budget.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BudgetListPage;
